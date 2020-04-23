import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from "styled-components"
//import SiteInfo from "./SiteInfo"
//import PropTypes from "prop-types"
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition() {
  const mMenuItem = styled(Link)`
color: white;
display: block;
padding: 8px 16px;
`
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


return (
    <StaticQuery query={graphql`
    {
   allWordpressWpApiMenusMenusItems(filter: {name: {eq: "TopNav"}}) {
    edges {
      node {
        items {
          title
          object_slug
          wordpress_children {
            title
            object_slug
          }
        }
      }
    }
  }
}
  `}
  render={props =>  (
       <div className={classes.root}> 
        <ul className="list-unstyled d-flex">
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((item, i) => (
                <li key={i}>
                    
                    <button
                    
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >{item.title}
        </button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                    {item.wordpress_children ? (
                        
                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                            {item.wordpress_children.map((child, j) =>(
                                
                                    <MenuItem key={j} activeClassName="nav-active">
                                    <a href={child.object_slug}>
                                    {child.title}
                                    </a>
                                    </MenuItem>
                                
                            ))}
                            </MenuList>
                        
                        ) : null}
                        </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
                </li>
            ))}
        </ul>
        </div>
    )} />
  );
}