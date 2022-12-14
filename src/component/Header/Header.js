import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        
       <div>
             <div>

<div className="navbar bg-amber-500 mb-4">
    <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Quiz <br/> Platform </a> 
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        <li><Link to={'/'}>Home</Link></li>
        <li tabIndex={0}>
<Link to={'/topics'}>
Topics
{/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg> */}
</Link>
<ul className="p-2 bg-base-100">
{/* <li><a>Submenu 1</a></li>
<li><a>Submenu 2</a></li> */}
</ul>
</li>
<li><Link to={'/statics'}>Statics</Link></li>
<li><Link to={'/blog'}>Blog</Link></li>

</ul>
</div>
</div>

</div>

       </div>



        
    );
};

export default Header;