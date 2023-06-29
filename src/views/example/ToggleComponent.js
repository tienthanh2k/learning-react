import React from 'react';

class ToggleComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showMsgStatus: false
        }
    }

    handleClickShowData = () => {
        this.setState({
            showMsgStatus: !this.state.showMsgStatus
        });
    }

    render() {
        let { showMsgStatus } = this.state;
        return (
            <div>
                {!showMsgStatus && <button onClick={() => this.handleClickShowData()}>Show Data</button>}

                {showMsgStatus && <button onClick={() => this.handleClickShowData()}>Hide Data</button>}
                
                {showMsgStatus &&
                    (<table>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                    </table>)
                }

            </div>
        )
    }
}

export default ToggleComponent;