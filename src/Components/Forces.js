import React, { Component } from 'react'

class Forces extends Component {

    constructor() {
        super()
        this.state = {
            data: [],
            filt: [],
            sear: false,
        }
    }

    componentDidMount() {
        fetch('https://data.police.uk/api/forces')
            .then((res) =>
                res.json()
            )
            .then((resp) => {
                this.setState({
                    data: resp,
                })
                console.log(resp)
            })
    }

    search(e) {
        let data = this.state.data
        let txt = e.target.value
        let filt = data.filter((arr) => {
            return arr.name.toUpperCase().includes(txt.toUpperCase())
        })
        this.setState({ filt, sear: true })
    }

    render() {
        return (
            <div>
                <input className="form-control" style={{ width: "50%" }} placeholder="Search Here" onChange={this.search.bind(this)} />
                {this.state.data !== [] && !this.state.sear &&
                    <div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.data.map((dat) => {
                                        return <tr key={Math.random(36)}>
                                            <td>{dat.id}</td>
                                            <td>{dat.name}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                }
                {
                    this.state.filt !== [] && this.state.sear &&
                    <div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.filt.map((dat) => {
                                        return <tr key={Math.random(36)}>
                                            <td>{dat.id}</td>
                                            <td>{dat.name}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        )
    }
}

export default Forces
