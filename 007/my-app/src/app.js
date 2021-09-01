const App = () => {
    return (
        <>
        <Title>Título</Title>
        <Sidebar/>
        <Content/>
        </>
    )
}


const Title = ({children}) => {
    return (
        <h1>{children}</h1>
    );
  };

  const Title2 = ({children}) => {
    return (
        <h2>{children}</h2>
    );
  };

  const Sidebar = () => {
    return (
        <aside>
            <Title2>Aside</Title2>
        </aside>
    );
  };

  const Content = () => {
    return (
        <section>
            <h2>Conteúdo</h2>
            <p>Parágrafo</p>
        </section>
    );
  };



  export default App