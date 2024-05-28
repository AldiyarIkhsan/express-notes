import cli
export const getCounter = async ()=>{
    const reponse  = await 
}
export const getNote = async (): Promise<NoteResponse> => {
    return (await client.get("/post.json")).data;
  };
  