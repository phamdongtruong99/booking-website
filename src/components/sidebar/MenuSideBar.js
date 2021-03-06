import React, {Component} from 'react';
import DropDown from '../sidebar/DropDown';

const menusidebar = {
    admins: [
        {
            group: {
                title: 'Tour',
                exact: '',
                to: '',
                list: [
                    {
                        title: 'All Tour',
                        exact: false,
                        to: '/admin/all-tour',
                    },
                    {
                        title: 'Add Tour',
                        exact: false,
                        to: '/admin/add-tour',
                    },
                ],
            },
        },
        {
            group: {
                title: 'User',
                exact: '',
                to: '',
                list: [
                    {
                        title: 'All User',
                        exact: false,
                        to: '/admin/all-user',
                    },
                    {
                        title: 'Add User',
                        exact: false,
                        to: '/admin/add-user',
                    },
                ],
            },
        },
        {
            group: {
                title: 'Employee',
                exact: '',
                to: '',
                list: [
                    {
                        title: 'All Employee',
                        exact: false,
                        to: '/admin/all-employee',
                    },
                    {
                        title: 'Add Employee',
                        exact: false,
                        to: '/admin/add-employee',
                    },
                ],
            },
        },
        {
            group: {
                title: 'Bookings',
                exact: '',
                to: '',
                list: [
                    {
                        title: 'All Bookings',
                        exact: false,
                        to: '/admin/bookings',
                    },
                ],
            },
        },
        {
            group: {
                title: 'Customer',
                exact: '',
                to: '',
                list: [
                    {
                        title: 'All Customer',
                        exact: false,
                        to: '/admin/all-customer',
                    },
                    {
                        title: 'Add Customer',
                        exact: false,
                        to: '/admin/add-customer',
                    },
                ],
            },
        },
        {
            group: {
                title: 'Chat',
                exact: '',
                to: '',
                list: [
                    {
                        title: 'Chats',
                        exact: false,
                        to: '/admin/chat',
                    },
                ],
            },
        },
    ],
};

class MenuSideBar extends Component {
    state = {
        isShow: false,
    };

    showMenus = (menus) => (
        <div>
            {menus.admins.map((val, i) => (
                <DropDown MenuItem={val} key={i} />
            ))}
        </div>
    );

    render() {
        return (
            <div className="menu-sidebar">{this.showMenus(menusidebar)}</div>
        );
    }
}

export default MenuSideBar;
