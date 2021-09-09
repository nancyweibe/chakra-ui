import styles from './scrollbar.module.scss'
import Scrollbar from "react-smooth-scrollbar"

const ScrollBarWrapper = ({children, className, onInit, alwaysShowTracks}) => {

  return <Scrollbar alwaysShowTracks={alwaysShowTracks} ref={onInit} className={`${styles.scrollBarWrapper} ${className ? className : ""} scoll-bar`}>
      {children}
    </Scrollbar>
}

export default ScrollBarWrapper;
