import {useEffect, useRef, useState} from 'react'

const useIntersectionObserver = (options) => {

    const ref = useRef()
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting)
        }, options)

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            // if (ref.current) {
            //     observer.unobserve(ref.current)
            // }
        }

    }, [ref, options])

    return [
        ref,
        isInView
    ]
}

export default useIntersectionObserver