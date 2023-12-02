const LinkLayout =  () => {
  return (
    <div>
       <Link to {'/main'}>Home</Link>
       <Link to {'/about'}>About</Link>
       <Link to {'/:factId'}>fact</Link>
       
    </div>
  )
}

export default LinkLayout;