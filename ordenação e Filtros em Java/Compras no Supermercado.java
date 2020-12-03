import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) throws IOException {
    //Compras no supermercado
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine()); // Lê a linha de entrada
        Integer a = Integer.parseInt(st.nextToken());

        String lista;
        Set<String> hashList= new HashSet<>();
        List<String> list;
        List<String> produtos=new ArrayList<>();
        for(int i=1;i<=a;i++){
            hashList.addAll(Arrays.stream(br.readLine().trim().split(" "))
                    .collect(Collectors.toCollection(HashSet::new)));
            list=hashList.stream().collect(Collectors.toList());
            hashList.clear();
            Collections.sort(list);
            lista=list.stream().reduce("",(acc,elem)->acc+" "+elem);
            produtos.add(lista);
        }
        produtos.stream().forEach(System.out::println);
        
  }
}