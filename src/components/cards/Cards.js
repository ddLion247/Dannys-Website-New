import './Cards.css';
import { useState, useEffect  } from 'react';
import React from 'react';

import grilledSalmon from './res/grilledSalmon.jpg';

import produce from 'immer';

import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Notes = props => props.data.map(note => <div>{note.text}</div>);

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function Cards() {
    
    const c1 = {title:"Example", picture: "Picture" , ingredients:["Ingredients:"," ","Onions"," ","Garlic"], instructions:"Instructions"};
    const c2 = {title:"H", picture:"Yeet", ingredients:["Ingredients:"," ","Onions"," ","Garlic"], instructions:"Instructions"};

    const display = [c1, c2];
    const initialData = [{ text: 'Loading Notes ... ' }];
    const [data, setData] = useState(initialData);
    const [expanded, setExpanded] = React.useState(false);

    const handleClick = () => {
        const text = document.querySelector('#noteinput').value.trim();
        if (text) {
          const nextState = produce(data, draftState => {
            draftState.push({ text });
          });
          document.querySelector('#noteinput').value = '';
  
          if (typeof window !== 'undefined') {
            localStorage.setItem('data', JSON.stringify(nextState));
          }
  
          setData(nextState);
        }
      };

      useEffect(() => {
        if (typeof window !== 'undefined') {
          const getData = localStorage.getItem('data');
          if (getData !== '' && getData !== null) {
            return setData(JSON.parse(getData));
          }
          return setData([]);
        }
      }, []);

      const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    
      // localStorage.clear();

    function deleteCard() {
        // localStorage.removeItem('chili');
    }

    return (
      <div>
        <Card className='card1'>
            <div className='cardTitle'>{display[0].title}</div>
            <div className='cardPicture'>{display[0].picture}</div>
            <div className='cardIngredients'>{display[0].ingredients}</div>
            <div className='cardInstructions'>{display[0].instructions}</div>
            <button className='button' onClick={() => deleteCard()}>Delete</button>
        </Card>
        <div>
              <input id="noteinput" style={{ width: '20%' }} type="text" placeholder="Enter a new note" />
              <button className='button' onClick={() => handleClick()}>Add note</button>
              <Notes data={data}/>
        </div>
            <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            title="Grilled Salmon"
          />
          <CardMedia
            component="img"
            img src={grilledSalmon}
            alt="Paella dish"
            className='card1'
          />
          <CardContent variant="body2" color="text.secondary">
            This impressive salmon is a perfect party dish and a fun meal to cook
            together with your guests. Add asparaguss along with the salmon,
            if you like.
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            > 
              Recipe
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                large plate and set aside, leaving chicken and chorizo in the pan. Add
                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                stirring often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and
                peppers, and cook without stirring, until most of the liquid is absorbed,
                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                mussels, tucking them down into the rice, and cook again without
                stirring, until mussels have opened and rice is just tender, 5 to 7
                minutes more. (Discard any mussels that don&apos;t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
};