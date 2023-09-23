import {useEffect, useState} from 'react'
import { Verse } from '../lib/verse'
import { Drawer } from 'vaul'
import { AiOutlineInfoCircle, AiOutlineShareAlt, AiOutlineEdit, AiOutlineDownload} from "react-icons/ai";
import { JellyTriangle } from '@uiball/loaders'
import { noteAtom } from '../lib/noteAtom';
import { useAtom } from 'jotai';

export default function Study(){
  const [scripture, setScripture] = useState <Verse|null>(null)
  const [note, setNote] = useAtom(noteAtom);
  const [downloadURL, setDownloadURL] = useState<Blob|null>(null);
  useEffect(()=>{
    getScriptures()
  },[])

  let randNum = Math.floor(Math.random() * 6605)

  const openVerseWeb = () => {
    let title = scripture?.book_short_title.replace(".","").replace(" ","-")
    let verse = scripture?.verse_number
    let chapter = scripture?.chapter_number
    return `https://www.churchofjesuschrist.org/study/scriptures/bofm/${title}/${chapter}?lang=eng&id=p${verse}#p${verse}`
  }

  let currDate = (new Date()).toJSON().slice(0, 10)

  // url to open scriptures to specific verse
  //https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2?lang=eng&id=p11#p11

  // share a string so like share your thoughts into notes
  const shareNotes = () => {
    if (navigator.share) {
      navigator.share({
        title: "Celestial",
        text: `${currDate} Notes`,
        files: [
          new File([downloadURL?downloadURL:"/"], `Celestial-${currDate}.txt`, {
            type: "text/plain",
          })
        ]
      })
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error sharing:', error));
    }
    else{
      alert("not working")
    }
  }


  useEffect(()=>{
    if(!scripture) return;
    let blobby = new Blob([scripture?.verse_title + "\n" + note],{type:"text/plain"});
    setDownloadURL(blobby);


  },[note])

  const dURL = downloadURL?window.URL.createObjectURL(downloadURL):"/";

  const getScriptures = async () => {
    await fetch("./book-of-mormon.json")
    .then(resp => resp.json())
    .then(json => setScripture(json[randNum]))
  }

  if (scripture) {
    return(
        <div className='flex flex-col h-screen w-full justify-center items-center bg-[#F8F1EA]'>
          <Drawer.Root shouldScaleBackground>

              <div className='w-[300px] flex flex-col bg-white p-5 text-black rounded-xl shadow-2xl'>
                <h2 className='text-3xl font-bold mb-5'>{scripture.verse_title}</h2>
                <p className=''>{scripture.scripture_text}</p>
                <div className='flex flex-row w-full mt-5 justify-between'>
                  <Drawer.Trigger asChild>
                      <button><AiOutlineEdit className="text-2xl"/></button>
                  </Drawer.Trigger>
                  <a href={openVerseWeb()} target='_blank'><AiOutlineInfoCircle className="text-2xl"/></a>
                  <button className='block lg:hidden' onClick={()=>shareNotes()}><AiOutlineShareAlt className="text-2xl"/></button>
                  <a href={dURL} download={`Celestial-${currDate}.txt`} className='hidden lg:block'><AiOutlineDownload className="text-2xl"/></a>
                </div>
              </div>
              <Drawer.Overlay className="fixed inset-0 bg-black/40" />
              <Drawer.Portal className='flex md:hidden'>
              <Drawer.Content className="bg-white flex flex-col h-[96%] items-center mt-24 fixed bottom-0 left-0 right-0">
                <div className="mx-auto my-5 w-16 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                      <div className='w-full h-full flex flex-col items-center'>
                        <div className='m-5 flex flex-col'>
                          <div className='mb-3'>
                            <Drawer.Title className="font-bold text-2xl">
                              Scribble Your Thoughts
                            </Drawer.Title>
                            <p className='text-md text-slate-400'>How did the scripture make you feel?</p>
                          </div>
                          <textarea onChange={e=>setNote(e.target.value)} value={note} className='w-[300px] h-[300px] p-3 resize-none rounded-lg border-solid border-slate-400 border-2' />
                        </div>
                      </div>
              </Drawer.Content>
              </Drawer.Portal>
          </Drawer.Root> 
        </div>
    )
  }
    return(
        <div className='bg-[#F8F1EA] h-screen w-full flex justify-center items-center'>
          <JellyTriangle />
        </div>
    )
}