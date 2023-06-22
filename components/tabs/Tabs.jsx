import { useLocation, useNavigate } from 'react-router-dom';
import { PAGES_URLS } from '../../data/internalUrls';
import Button from '../button/Button';
import './Tabs.css';
import { useEffect, useState } from 'react';

const Tabs = () => {
  // V -------------------
  const pages = Object.values(PAGES_URLS);
  const [currentActive, setCurrentActive] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  // F -------------------
  useEffect(() => {
    setCurrentActive(location.pathname);
  }, [location]);

  const handleGoToPage = (url) => {
    return navigate(url, {
      state: {
        dir: ""
      }
    })
  }
  // R -------------------
  return (
    <div className='Tabs'>
      {
        pages.map((page, index) => {
          return (
            <Button
              isSelected={currentActive === page.url}
              key={index + "tabsPage"}
              imgUrl={page.iconsArr}
              onClickEv={() => { handleGoToPage(page.url) }}
            />
          )
        })
      }
    </div>
  );
}

export default Tabs;