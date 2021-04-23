<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="keyword" content="task adder">
    <meta name="description" content="add your tasks to store for future">
<!-- css cdn -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<!-- fontawesome cdn -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <title>Task List</title>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title">Task List</span>
                        <div class="row">
                            <form id="task-form">
                                <div class="input-field col s12">
                                    <input type="text" name="task" id="tasks">
                                    <label for="task">New Task</label>
                                </div>
                               <input type="submit" class="btn" value="Add Task">
                            </form>
                        </div>
                    </div>
                    <div class="card-action">
                        <h5 id="task-title">Tasks</h5>
                        <div class="input-field col s12">
                            <input type="text" name="filter" id="filter">
                            <label for="filter">Filter Tasks</label>
                        </div>
                        <ul class="collection"></ul>
                        <a href="#" class="btn black clear-tasks">Clear Tasks</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

<!-- jquery cdn -->
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"></script>
<!-- js cdn -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="app.js"></script>
</body>
</html>