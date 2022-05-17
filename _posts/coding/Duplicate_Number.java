import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class Duplicate_Number {
    public static void main(String[] args) {
        // sum 값이 1이상이될 경우 중복된값이 있는것이므로 false를 출력한다.
        
		/* 0~9까지의 문자로 된 숫자를 입력 받았을 때, 이 입력 값이 0~9까지의 숫자가
		  
	 	각각 한 번 씩만 사용된 것인지 확인하는 함수를 구하시오.

		sample inputs: 0123456789 01234 01234567890 6789012345 012322456789

		sample outputs: true false false true false */
		
		Scanner scanner = new Scanner(System.in);
		System.out.print("0 ~ 9의 문자를 사용하여 입력해주세요: ");
		
        String[] in = scanner.next().split("");
        ArrayList<String> temp = new ArrayList<String>(Arrays.asList(in));
        int sum = 0;
        
        Collections.sort(temp); // 오름차순
        
        for (int i = 0; i < temp.size()-1; i++) {
            if (temp.get(i).equals(temp.get(i+1))) { // get(0)이면 첫번째 숫자 
                sum++;
                break;
            }
        }
        if (sum > 0 || temp.size() != 10) {
            System.out.println("false");
        } else {
            System.out.println("true");
        }
    }
}
