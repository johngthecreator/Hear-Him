import {useEffect, useState} from 'react'
import { Verse } from '../lib/verse'
import { Drawer } from 'vaul'
import { AiOutlineInfoCircle, AiOutlineShareAlt, AiOutlineEdit} from "react-icons/ai";

export default function Study(){
  const [scripture, setScripture] = useState <Verse|null>(null)
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

  // url to open scriptures to specific verse
  //https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/2?lang=eng&id=p11#p11

  // share a string so like share your thoughts into notes
  const shareNotes = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: "Hello World",
        files: [
          new File([blobby], 'test.txt', {
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

  const blobby = new Blob(['little baby txt file test'], {type: 'text/plain'})

  const getScriptures = async () => {
    await fetch("./book-of-mormon.json")
    .then(resp => resp.json())
    .then(json => setScripture(json[randNum]))
  }

  if (scripture) {
    console.log(scripture)
    return(
        <div className='flex flex-col h-screen w-full justify-center items-center'>
          <Drawer.Root shouldScaleBackground>

              <div className='w-[300px] flex flex-col bg-indigo-600 p-5 text-white rounded-xl shadow-2xl'>
                <h2 className='text-3xl font-bold mb-5'>{scripture.verse_title}</h2>
                <p className=''>{scripture.scripture_text}</p>
                <div className='flex flex-row w-full mt-5 justify-between'>
                  <Drawer.Trigger asChild>
                      <button><AiOutlineEdit className="text-2xl"/></button>
                  </Drawer.Trigger>
                  <a href={openVerseWeb()} target='blank'><AiOutlineInfoCircle className="text-2xl"/></a>
                  <button onClick={()=>shareNotes()}><AiOutlineShareAlt className="text-2xl"/></button>
                </div>
              </div>



              <Drawer.Overlay className="fixed inset-0 bg-black/40" />
              <Drawer.Portal className='flex md:hidden'>
              <Drawer.Content className="bg-zinc-100 flex flex-col h-[96%] items-center mt-24 fixed bottom-0 left-0 right-0">
                <div className="mx-auto my-5 w-16 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                      <div className='w-full h-full flex flex-col justify-center items-center'>
                        <div className='m-5'>
                          <div className='mb-3'>
                            <Drawer.Title className="font-bold text-2xl">
                              Scribble Your <span className='text-indigo-600'> Thoughts </span>
                            </Drawer.Title>
                            <p className='text-md text-slate-400'>How did the scripture make you feel?</p>
                          </div>
                          <textarea className='w-[300px] h-[300px] p-3 resize-none rounded-lg border-solid border-2 border-indigo-600' />
                        </div>
                      </div>
              </Drawer.Content>
              </Drawer.Portal>
          </Drawer.Root> 
        </div>
    )
  }
    return(
        <div>
            <p>loading</p>
        </div>
    )
}