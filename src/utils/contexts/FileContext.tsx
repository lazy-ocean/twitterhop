import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  ReactElement,
} from "react";
import * as FileSystem from "expo-file-system";
import * as DocumentPicker from "expo-document-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { searchTweets } from "../tweetSearch";
import { Tweet } from "../../interfaces";

const DATA_KEY = "twitterArchive";

const FileContext = createContext<FileContextType | null>(null);

export interface FileContextType {
  fileUri: string | null;
  selectFile: () => void;
  data: { [key: number]: Tweet[] } | null;
}

export const useFile = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error("useFile must be used within a FileProvider");
  }
  return context;
};

export const FileProvider = ({ children }: { children: ReactElement }) => {
  const [fileUri, setFileUri] = useState<string | null>(null);
  const [data, setData] = useState<{ [key: number]: Tweet[] } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const value = await AsyncStorage.getItem(DATA_KEY);
        if (value !== null) {
          readFile(value);
        }
      } catch (e) {
        setIsLoading(false);
        console.log(e);
      }
    };

    if (!data) {
      getData();
    }
  }, []);

  const readFile = async (fileUri: string) => {
    try {
      if (fileUri) {
        const fileContent = await FileSystem.readAsStringAsync(fileUri);
        const jsonContent = fileContent.replace(
          "window.YTD.tweets.part0 = ",
          ""
        );

        const data = JSON.parse(jsonContent);
        const tweets = searchTweets(data);
        setData(tweets);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const selectFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: false,
      });

      if (result.canceled) {
        return;
      }

      const { uri, name } = result.assets[0];

      const targetUri = FileSystem.documentDirectory + name;
      await AsyncStorage.setItem(DATA_KEY, targetUri);
      await FileSystem.copyAsync({ from: uri, to: targetUri });

      setFileUri(targetUri);
      if (targetUri) readFile(targetUri);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FileContext.Provider value={{ fileUri, selectFile, data, isLoading }}>
      {children}
    </FileContext.Provider>
  );
};
