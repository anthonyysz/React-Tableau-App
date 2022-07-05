function App() {

  const { tableau } = window;

  let viz;
  const vizContainer = document.getElementById("vizContainer");
  const url = "https://public.tableau.com/views/SalesFunnelVisual1/Dashboard1";
  const options = {
    device: 'desktop',
    height: '820px',
    width: '1200px',
  };

  function initViz() {
    viz = new tableau.Viz(vizContainer, url, options);
  }

  let refreshInterval;

  function refreshDataSource() {
    refreshInterval = setInterval(() => {
      console.log('Refreshing...')
      viz.refreshDataAsync()
    }, 60000);
  }

  function stopRefresh() {
    console.log("Stop the Refresh");
    clearInterval(refreshInterval);
  }

  document.getElementById("start").addEventListener('click', refreshDataSource)
  document.getElementById("stop").addEventListener('click', stopRefresh)

  initViz();
}

export default App;
