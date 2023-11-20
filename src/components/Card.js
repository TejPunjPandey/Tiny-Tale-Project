import React from 'react'
import styles from '../styles/Card.module.css'

export default function Card({item}) {
  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
          <h2>{item.title}</h2>
          <span>👍</span>
        </div>
        <div>
          <p>{item.description}</p>
        </div>
        <div>
          <p><span>{item.type} </span>by anujgosalia</p>
          <ul>
            <li>{item.date}</li>
            <li>{item.timeInMin} mins Read</li>
            <li>{item.views} Views</li>
          </ul>
        </div>
      </div>
    </>
  )
}
