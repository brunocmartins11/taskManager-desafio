import React from 'react'
  
function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" href="#">
                Gerenciador de Tarefas
            </a>
          </div>
          <div className="nav-right">
            <div className="tabs">
              <a href="https://github.com/brunocmartins11">GitHub</a>
            </div>
          </div>
        </nav>
      </div>
    );
}
  
export default Header;