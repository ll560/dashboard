console.log("hello")

class App extends React.Component{
    render() {
        return (
            <div >
                <h1>Dashboard</h1> 
        <div className="container">

                <div className="sidebar">
                    <div>
                        <p>Dashboard</p>
                        <p>Widget</p>
                        <p>Reviews</p>
                        <p>Containers</p>
                        <p>Online Analysis</p>

                    </div>

                
                </div>
                <div className="area2">
                    <div className="top">
                        <p className="box">Reviews</p>
                        <p className="box">Average Rating</p>
                        <p className="box">Sentiment Analysis</p>
                    </div>

                    <div className="bottom">
                        <p className="box2">Website Visitors</p>
                    </div>
                </div>

      </div>    

            </div>
            
        )
    }
}





ReactDOM.render(
    <App/>, //the first component accepts JSX, this is the parent component
     document.querySelector('main')
    
)