import React, { useEffect } from 'react';
import './App.css';
import "antd/dist/antd.css";
import { useItemDispatch } from './item-context/context'
import { KanbanContainer } from './components/KanbanContainer';
import { useBoardDispatch } from './board-context/context';
import { TodoItem } from './item-context/models';
import { Board } from './board-context/models';
import { addToList } from './item-context/actions';
import { addNewBoard } from './board-context/actions';
import { Header } from './components/Header';

function App() {

  const itemDispatch = useItemDispatch();
  const setItemsMockData = async () => {
    const mockData: TodoItem[] = [
      {
        id: 1,
        title: "Ofix 4 Anasayfa Mockup",
        content: "Ofix 4 anasayfası için mockup hazırlanacak",
        date: new Date(),
        boardId: 1
      },
      {
        id: 2,
        title: "Ofix 4 Ödeme Mockup",
        content: "Ofix 4 ödeme sayfası için mockup hazırlanacak",
        date: new Date(),
        boardId: 2
      }
    ];
    mockData.forEach(data => {
      itemDispatch(
        addToList({
          id: data.id,
          title: data.title,
          content: data.content,
          date: data.date,
          boardId: data.boardId
        })
      );
    })
  }

  const boardDispatch = useBoardDispatch();
  const setBoardsMockData = async () => {
    const mockData: Board[] = [
      {
        id: 1,
        name: 'Wishlist'
      },
      {
        id: 2,
        name: 'Doing'
      }
    ];
    mockData.forEach(data => {
      boardDispatch(
        addNewBoard({
          id: data.id,
          name: data.name
        })
      );
    })
  }

  useEffect(() => {
    setItemsMockData();
    setBoardsMockData();
  }, [])

  return (
    <div>
      <Header/>
      <KanbanContainer />
    </div>
  );
}

export default App;
