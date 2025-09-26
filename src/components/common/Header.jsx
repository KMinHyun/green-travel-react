import './Header.css';

function Header() {

  return(
    <>
      <div className='header'>
        <h1><span>Green Travel</span></h1>
        <div className='search-bar'>
          <form action="">
            <input type="search" name="search" id="search"/>
          </form>
        </div>
      </div>
    </>
  )
}

export default Header;