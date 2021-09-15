import { useEffect, useState } from 'react'
import styles from './scrollbar.module.scss'
import Scrollbar from "react-smooth-scrollbar"

const ScrollBarWrapper = ({children, className, onInit, alwaysShowTracks}) => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(()=>{
    if(window.innerWidth < 990) {
      setIsMobile(true)
    }
  }, [])

  return isMobile ? children : <Scrollbar alwaysShowTracks={alwaysShowTracks} ref={onInit} className={`${styles.scrollBarWrapper} ${className ? className : ""} scoll-bar`}>
      {children}
    </Scrollbar>
}

export default ScrollBarWrapper;
