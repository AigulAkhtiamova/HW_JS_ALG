/*
Входные данные: Граф и начальная вершина src.
Выходные данные: Кратчайшее расстояние до всех вершин от src. 
Если попадается цикл отрицательного веса, то самые короткие расстояния не вычисляются,
 выводится сообщение о наличии такого цикла.
*/

class Node {
    constructor(vertices) {
        this.vertices = vertices;
    }
}

class Graph {
    constructor(vert) {
        this.vert = vert;
        this.graph = [];
        //this.vert = vertices # No. of vertices 
        //self.graph = [] # default dictionary to store graph         
    }
    // добавление ребер к графу
    addEdge(u, v, w) {
        this.graph.push([u, v, w])
    }
    // поиск кратчайшего расстояния от src до всех остальных вершин, используя алгоритм Беллмана-Форда. 
    //Функция также обнаруживает отрицательный цикл взвешивания
    find(src) {
        var distance = new Array (vert-1)

        // dist[src] = 0
        for (let i = 0; i < this.vert; i++) {
            //Произведите следующее действие для каждого ребра u-v:
            //Если dist[v] > dist[u] + вес ребра uv, то обновите dist[v]
            //dist [v] = dist [u] + вес ребра uv
			//for u, v, w in self.graph: 
			//	if dist[u] != float("Inf") and dist[u] + w < dist[v]: 
			//			dist[v] = dist[u] + w             
            for(let j = 0; j < This.graph.lenght; j++ ){
                //if (This.graph[0,j] != 0 && (This.graph[0,j] + )){
                //}
            }
        }
        /*
                for i in range(self.V - 1): 
                # Update dist value and parent index of the adjacent vertices of 
                # the picked vertex. Consider only those vertices which are still in 
                # queue 
                for u, v, w in self.graph: 
                    if dist[u] != float("Inf") and dist[u] + w < dist[v]: 
                            dist[v] = dist[u] + w 
        */
    }

}

