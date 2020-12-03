import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) throws IOException {
    
     //Fila do Banco
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine()); // Lê a linha de entrada
        Integer a = Integer.parseInt(st.nextToken());

        List<Integer> list;
        List<Integer> listReversa;
        List<Integer> comparacao,index;
        List<Integer> resultado=new ArrayList<>();

        for(var i=1;i<=a;i++){
            br.readLine();
            String[] numeros = br.readLine().trim().split(" ");

            list=Arrays.stream(numeros).map(elem -> Integer.parseInt(elem)).collect(Collectors.toList());
            listReversa=list.stream().sorted(Comparator.reverseOrder()).collect(Collectors.toList());

            List<Integer> finalList = list;
            index=list.stream().map(elem-> finalList.indexOf(elem)).collect(Collectors.toList());
            comparacao=listReversa.stream().map(elem-> finalList.indexOf(elem)).collect(Collectors.toList());

            List<Integer> finalComparacao = comparacao;
            resultado.add(index.stream()
                    .reduce(0,(acc, elem)->elem== finalComparacao.indexOf(elem)?++acc:acc));
        }
        resultado.stream().forEach(System.out::println);
    
    }
  
}