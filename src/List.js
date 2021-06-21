import React from "react";

class List extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            'items' : this.props.items,
        };
    }

    deleteItem(id) {
        let {items} = this.state;
        const temp = items.filter((item) => item.id !== id);
        this.setState({ 'items': temp });
    }

    render() {
        const menu = this.state.items.map((item) => 
             <li className="list-item" key={item.id}>
                <div className="bg-item" style={{backgroundColor: item.bg}}></div>
                <div className="info-item">
                    <h2>{item.ttl}</h2>
                    <p>{item.txt}</p>
                </div>
                <a className="del-btn" href="#" onClick={() => this.deleteItem(item.id)}><i>X</i></a>
            </li>
        );

        const checkList = this.state.items.length <= 0
        return (
            <div>
                { checkList ? <h1>Còn gì nữa đâu.</h1> : <ul className="style-list">{menu}</ul> }
            </div>
        );
    }
}

export default List;