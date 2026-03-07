import { useEffect, useState } from "react"

type TypewriterTextProps = {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
  className?: string
}

export default function TypewriterText({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1400,
  className = "",
}: TypewriterTextProps) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isFinalTyping, setIsFinalTyping] = useState(false)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (!words.length || finished) return

    const currentWord = isFinalTyping ? words[0] : words[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1))
      }, typingSpeed)
    } else if (!isDeleting && text.length === currentWord.length) {
      if (isFinalTyping) {
        setFinished(true)
        return
      }

      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseTime)
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1))
      }, deletingSpeed)
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false)

      if (wordIndex === words.length - 1) {
        setIsFinalTyping(true)
      } else {
        setWordIndex((prev) => prev + 1)
      }
    }

    return () => clearTimeout(timeout)
  }, [
    text,
    isDeleting,
    wordIndex,
    isFinalTyping,
    finished,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ])

  return (
    <span className={className}>
      {text}
      {!finished && <span className="ml-1 inline-block animate-pulse">|</span>}
    </span>
  )
}