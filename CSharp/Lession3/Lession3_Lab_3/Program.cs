﻿using Lession3_Lab_3;
using System.Text;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.OutputEncoding = Encoding.UTF8;
        Contact contact1 = new Contact();
        contact1.Id = 1;
        contact1.FirstName = "Test";
        contact1.LastName = "1";
        contact1.Address = "Hà Nội";
        contact1.PhoneNumber = "1234567890";
        contact1.Email = "12@gmail.com";
        Contact contact2 = new Contact(2, "Việt", "vippro", "Hà Nội", "03322323232", "Ducky@gmail.com");
        contact1.Display();
        contact2.Display();
    }
}