import {Link} from 'react-router-dom'
export function Navigation() {
    return (
        <div>
            <h1>Task App</h1>

            <ul>
                <li><Link to="/task">Lista de Tareas</Link></li>
                <li><Link to="/task-create">Create Task</Link></li>
            </ul>
            


        </div>
    );
}

