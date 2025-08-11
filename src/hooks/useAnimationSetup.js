// useAnimationSetup custom hook placeholder
import { useEffect } from 'react'
import { initGSAP } from '../utils/gsapConfig'

export const useAnimationSetup = () => {
  useEffect(() => {
    initGSAP()
  }, [])
}