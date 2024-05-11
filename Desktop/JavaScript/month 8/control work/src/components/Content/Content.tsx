import { useEffect, useState } from "react";
import { getContent } from "../../api/content";
import { useLocation } from "react-router-dom";
import { ContentRequest } from "../../interfaces/content";

export const Content = () => {
  const location = useLocation();
  const [data, setData] = useState<ContentRequest>();

  const onGetToDoList = async () => {
    await getContent(location.pathname.substring(1)).then((e) => setData(e));
  };

  useEffect(() => {
    onGetToDoList();
  }, [location.pathname]);

  if (!data) return "no content";
  return (
    <div>
      <h2>Title: {data.author}</h2>
      <h3>Content: {data.text}</h3>
    </div>
  );
};
