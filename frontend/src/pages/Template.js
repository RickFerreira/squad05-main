import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import { AppTopbar } from '../components/AppTopbar';
import { AppMenu } from '../components/AppMenu';
import MenuItems from '../constants/MenuItems';
import { Toast } from 'primereact/toast';
import AppStore from '../stores/AppStore';

const Template = ({ children }) => {
  const [layoutMode] = useState('static');
  const [sidebarActive, setSidebarActive] = useState(true);
  const sidebar = useRef();
  const notification = useRef();

  let menuClick = false;

  useEffect(() => {
    if (sidebarActive) {
      addClass(document.body, 'body-overflow-hidden');
    } else {
      removeClass(document.body, 'body-overflow-hidden');
    }
    if (!AppStore.notificationRefFunction) {
      AppStore.setNotificationRefFunction(getNotificationComponent);
    }
  }, [sidebarActive]);

  const onWrapperClick = (event) => {
    if (!menuClick && layoutMode === 'overlay') {
      setSidebarActive(false);
    }
    menuClick = false;
  };

  const onToggleMenu = (event) => {
    menuClick = true;

    setSidebarActive((prevState) => !prevState);

    event.preventDefault();
  };

  const onSidebarClick = () => {
    menuClick = true;
  };

  const onMenuItemClick = (event) => {
    if (!event.item.items && layoutMode === 'overlay') {
      setSidebarActive(false);
    }
  };

  const addClass = (element, className) => {
    if (element.classList) element.classList.add(className);
    else element.className += ' ' + className;
  };

  const removeClass = (element, className) => {
    if (element.classList) element.classList.remove(className);
    else
      element.className = element.className.replace(
        new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'),
        ' '
      );
  };

  const isSidebarVisible = () => {
    return sidebarActive;
  };

  const logo = 'assets/layout/images/tceac.png';

  const wrapperClass = classNames('layout-wrapper', {
    'layout-overlay': false,
    'layout-static': true,
    'layout-active': sidebarActive,
    'p-input-filled': false,
    'p-ripple-disabled': false,
  });

  const sidebarClassName = classNames('layout-sidebar', {
    'layout-sidebar-dark': true,
  });

  const getNotificationComponent = () => {
    return notification.current;
  };

  const renderNotificationComponent = () => {
    return <Toast ref={(e) => (notification.current = e)} />;
  };

  return (
    <div className={wrapperClass} onClick={onWrapperClick}>
      <AppTopbar onToggleMenu={onToggleMenu} />

      <CSSTransition
        classNames="layout-sidebar"
        timeout={{ enter: 200, exit: 200 }}
        in={isSidebarVisible()}
        unmountOnExit
      >
        <div ref={sidebar} className={sidebarClassName} onClick={onSidebarClick}>
          <a href="/">
            <div className="layout-logo" style={{ cursor: 'pointer' }}>
              <img alt="Logo" src={logo} width="90%" />
            </div>
          </a>
          <AppMenu model={MenuItems} onMenuItemClick={onMenuItemClick} />
        </div>
      </CSSTransition>

      <div className="layout-main">
        {renderNotificationComponent()}
        {children}
      </div>
    </div>
  );
};

export default Template;
