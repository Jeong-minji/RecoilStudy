import { useRecoilState } from 'recoil'
import { textState } from '../states/counter'

const TextInput = () => {
  const [text, setText] = useRecoilState(textState)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div>
      <input type='text' value={text} onChange={onChangeHandler} />
      <div>Echo: {text}</div>
    </div>
  )
}

export default TextInput
