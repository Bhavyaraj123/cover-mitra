import React,{useEffect} from 'react'
import blogData from '../../assets/data/blogData'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/UseFetch'
import BlogCards from '../pages/blogsdetails/BlogCards'

const BlogSection = () => {
  
  useEffect(() => {
   window.scroll(0,0)
  }, )
  
  return (
 <BlogCards/>
  )
}

export default BlogSection
