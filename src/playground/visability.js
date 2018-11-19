class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisability = this.handleToggleVisability.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisability() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    rendor() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisability}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                    <P>hey. Thses are some details you can now see!</P>
                    </div>
                )}
            </div>    
        )
    }

}ReactDOM.rendor(<VisibilityToggle />, document.getElementById('app'));



// let visibility = false;

// const toggleVisability = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisability}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                 <P>hey. Thses are some details you can now see!</P>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();