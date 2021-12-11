import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'

interface CardProps {
  articleData: {
    "userId": number,
    "id": number,
    "title": string,
    "body": string,
  }
}

const Card: NextPage<CardProps> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full p-7 h-[450px] flex flex-col justify-end" style={{ backgroundImage: `url(https://picsum.photos/id/${props.articleData.id}/300)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(0,0,0,0.75)' }}>
      <h3 className="text-white text-2xl line-clamp-1 capitalize">{props.articleData.title}</h3>
      <p className="text-white line-clamp-2 font-light">{props.articleData.body}</p>
    </motion.div>
  )
}

export default Card
