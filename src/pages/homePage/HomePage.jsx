import React from 'react';
import './homePage.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import { MyIcon } from '../../assets/icon';
import { Header } from './header/Header';

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className='homePage'>
            {/* header */}
            <div className='homeHeader'>
                <Header />
            </div>
            {/* sideBar and OutLet */}
            <div className='bodySection'>
                {/* side bar list */}
                <div className='sideBar'
                >
                    {sidebarList?.map((el, i) => {
                        return <div
                            key={i}
                            className='iconBtn'
                            onClick={() => navigate(`/${el?.routName}`)}
                        >
                            <MyIcon name={el?.iconName} />
                            <p>{el?.title}</p>
                        </div>
                    })}
                </div>

                <div className='outlet'>
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

let sidebarList = [
    { iconName: 'care', title: 'Personal Care', routName: 'personalCare' },
    { iconName: 'beverages', title: 'Beverages', routName: 'beverages' },
    { iconName: 'care', title: 'Grocery', routName: '' },
    { iconName: 'care', title: 'Household & Cleaning', routName: 'cleaning' },
    { iconName: 'care', title: 'Baby Care', routName: 'babyCare' },
    { iconName: 'care', title: 'Oil & Ghee', routName: 'oilGhee' },
]
