
import React from 'react'
import { CardItem, TaskTitle } from './styles';
import { Task } from '../../interface/Task';

interface CardProps{
    task: string;
}

export default function Card( {task}: CardProps ) {
    return(
        <CardItem>
            <TaskTitle>{task}</TaskTitle>
        </CardItem>
    );
}