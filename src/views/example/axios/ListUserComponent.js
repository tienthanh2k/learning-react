import React from 'react';
import axios from 'axios';
import './ListUser.scss';
import { useNavigate  } from "react-router-dom";
import withRouter from '../customizeWrapper/withRouter';

class ListUser extends React.Component {

    constructor(props){
        super(props);
    }
    
    state = {
        listUsers: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
        console.log('listUsers', this.state.listUsers)
    }

    handleViewDetailUser = (user) => {
        // v5 with Wrapper class: withRouter
        //this.props.history.push(`/user/${user.id}`);

        this.props.navigate(`/user/${user.id}`);
        // react dom v6
        //console.log("Detail user", user)
        //return redirect("/login");
        // const navigate = useNavigate();
        // return navigate(`/user/${user.id}`);
    }

    render() {
        let { listUsers } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id} onClick={() => this.handleViewDetailUser(item)} >
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        )
    }
}

export default withRouter(ListUser);