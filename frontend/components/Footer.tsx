import Link from 'next/link'

const Footer = () => {
  return (
    <div className='grid md:grid-cols-3 h-[10rem] justify-center bg-purple-100 z-80 drop-shadow-lg'>
      <div className='p-10'>
        <Link href={'/'}><p className='hover:underline-offset-2 transition cursor-pointer'>Services</p></Link>
        <Link href={'/'}><p className='hover:underline-offset-2 transition cursor-pointer'>Home</p></Link>
        <Link href={'/'}><p className='hover:underline-offset-2 transition cursor-pointer'>About Us</p></Link>
      </div>

      <div className='p-10'>
        <Link href={'contact'}><p className='hover:underline-offset-2 transition cursor-pointer'>Contact</p></Link>
        <p className='hover:underline-offset-2 transition cursor-pointer'>Social Media</p>
        <p className='hover:underline-offset-2 transition cursor-pointer'>Blog</p>
      </div>

      <div className='p-10'>
        <p className='hover:underline-offset-2 transition cursor-pointer'>Our Mission</p>
        <p className='hover:underline-offset-2 transition cursor-pointer'>Terms</p>
        <p className='hover:underline-offset-2 transition cursor-pointer'>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
