console.log("hello")

class Header extends React.Component {
    render() {
        return (
            <h1>Dashboard</h1>
        )
    }
}

class Sidebar extends React.Component {
    render() {
        return (
        <div className="sidebar">
                <p>Dashboard</p>
                <p>Widget</p>
                <p>Reviews</p>
                <p>Containers</p>
                <p>Online Analysis</p>
            
        </div>
        )
    }
}

class Reviews extends React.Component {
    render() {
        return (
            
            <div className="box">Reviews
                <p className="num">1,281</p>
            </div>
                      
        )
    }
}

class AverageRating extends React.Component {
    render() {
        return (
            
            <div className="box">Average Rating
                <p className="num">4.6</p>
            </div>
                     
        )
    }
}

class SegmentAnalysis extends React.Component {
    render() {
        return (
            
            <div className="box">Segment Analysis
                <p className="text">960</p>
                <p className="text">122</p>
                <p className="text">321</p>
            </div>
           
                        
        )
    }
}


class Visitors extends React.Component {
    render() {
        return (
            <div className="bottom">
                        <div className="box2">Website Visitors
                            <p className="num">821</p>
                            <div className="box3"> </div>
                        </div>
                    </div>
                        
        )
    }
}

class App extends React.Component{
    render() {
        return (
            <div >
                <Header></Header>
                <div className="container">
                <Sidebar></Sidebar>
                  <div className="area2">
                  <div className="top">
                        <Reviews></Reviews>
                        <AverageRating></AverageRating>
                        <SegmentAnalysis></SegmentAnalysis>
                    </div>

                    <Visitors></Visitors>
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