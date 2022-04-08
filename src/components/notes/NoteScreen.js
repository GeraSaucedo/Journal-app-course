import React from 'react'
import { NotesAppbar } from './NotesAppbar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NotesAppbar />

        <div className='notes__content'>
            <input type="text" placeholder='Some awesome title' className='notes__title-input' autoComplete='off' />
            <textarea placeholder='What happened today' className='notes__textarea' />
            <div className='notes__image'>
                <img src='https://png.pngtree.com/thumb_back/fh260/background/20200621/pngtree-abstract-modern-neon-frame-background-image_339537.jpg' />
            </div>
        </div>

    </div>
  )
}
