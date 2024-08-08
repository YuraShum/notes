import edit from '../image/edit.png'
import saved from  '../image/saved.png'
import bascet from  '../image/bascet.png'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Note({ timeCreated, id, deletingNote, editText, isEdit, inputTextarea, text, inputTitle, title}){

    return(
        <div className="note">
            {isEdit ? <input className='title__note' type="text" placeholder="Назва записки"value={title} 
                onChange = {(e) => inputTitle(id, e.target.value)}></input>: <h1>{title && title}</h1>}
            
            <div className="note_header">
                <div className="time__to__create_note">{`${timeCreated}`}</div>
                <div className="note__manipulation">
                    <button onClick={() => editText(id)}>
                        <img src={isEdit ? saved : edit} />
                    </button>
                    <button onClick={() => deletingNote(id)}>
                        <img src={bascet}/>
                    </button>
                </div>
            </div>
            {isEdit ? <textarea  className="note__content" value={text} onChange = {
                (e) => inputTextarea(id, e.target.value)
            }></textarea>:
                        <ReactMarkdown 
                            children={text} 
                            className = 'markdown' 
                            components ={
                                {
                                    code: Component,
                                }
                            }
                                />}
        </div>
    )
}

const Component = ({children, language}) => {
    return (
        <SyntaxHighlighter language={language ? language : null} style={docco}>
            {children}
        </SyntaxHighlighter>
    );
};

