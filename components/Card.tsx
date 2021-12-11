import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

interface CardProps {
  storeData: {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
  }[]
}

const Card: NextPage<CardProps> = (props) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {props.storeData.map((item, index) => {
        return (
          <div key={index}>
            <img width="50px" height="50px" alt={item.title} src={item.image} />
            <h1 className="text-3xl font-bold underline text-red-500">{item.category}</h1>
            {item.title}
            {item.description}
          </div>
        )
      })}
    </div>
  )
}

export default Card
