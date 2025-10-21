export const Footer = () => {
  return (
    <footer className='py-5 md:container md:mx-auto'>
      <p className='text-center'>
        &copy; {new Date().getFullYear()} - AppName Todos los derechos
        reservados
      </p>
    </footer>
  )
}
