import { Outlet } from 'react-router-dom'
import Main from './Main'

export default function MainLayout() {
  return (
    // TODO: @ines make semantic html layout with header, main, footer
    <>
      <header>Soy el header</header>

      <Main>
        <Outlet />
      </Main>
    </>
  )
}
