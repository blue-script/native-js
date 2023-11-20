import React, {ChangeEvent, MouseEvent} from 'react';

const callback = (): number => {
  alert('hay')
  return 12;
}

// window.setTimeout(callback, 1000)

export const User = () => {
  const search = (event: MouseEvent<HTMLButtonElement>) => {
    alert(event.currentTarget.name)
  }
  const saveUser = () => {
    alert('User have been saved')
  }

  const onNameChanged = () => {
    console.log('changed name')
  }
  const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('changed age ' + event.currentTarget.value)
  }

  const focusLost = () => {
    console.log('focus lost')
  }

  return (
    <div>
      <textarea onChange={onNameChanged} onBlur={focusLost}>dimych</textarea>
      <input onChange={onAgeChanged} type='number'/>
      <button name='delete' onClick={search}>x</button>
      <button name='save' onClick={search}>x</button>
    </div>
  )
}