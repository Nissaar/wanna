/* eslint-env browser */

import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import './Help.css';

const versionURL = 'https://github.com/mkermani144/wanna/releases/tag/Flex-alpha';
const repoURL = 'https://github.com/mkermani144/wanna';
const licenseURL = 'https://github.com/mkermani144/wanna/blob/master/LICENSE.md';

const Help = ({ sidebarExpanded, openExternal }) => {
  // const { shell } = window.require('electron');
  const marginStyles = {
    expanded: {
      marginLeft: 200,
    },
    mini: {
      marginLeft: 56,
    },
  };
  return (
    <div
      className="Help"
      style={
        sidebarExpanded ?
        marginStyles.expanded :
        marginStyles.mini
      }
    >
      <List>
        <ListItem
          primaryText="Version"
          secondaryText="Flex alpha"
          onClick={() => openExternal(versionURL)}
        />
        <Divider />
        <ListItem
          primaryText="Github repository"
          secondaryText="https://github.com/mkermani144/wanna"
          onClick={() => openExternal(repoURL)}
        />
        <Divider />
        <ListItem
          primaryText="License"
          secondaryText="MIT"
          onClick={() => openExternal(licenseURL)}
        />
        <Divider />
      </List>
    </div>
  );
};

export default Help;
