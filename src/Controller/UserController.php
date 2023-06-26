<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/user', name: "api_")]
class UserController extends AbstractController
{

    public function __construct(private UserRepository $userRepository){}

    #[Route('/', name: 'user_index', methods: ['GET'])]
    public function index(): Response
    {
        return $this->json($this->userRepository->findAll());
    }

    #[Route('/', name: 'user_new', methods: ['POST'])]
    public function new(Request $request, ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();

        $user = new User();
        $user->setName($request->request->get('name'));
        $user->setFirstname($request->request->get('firstname'));
        $user->setAge($request->request->get('age'));
        $user->setCin($request->request->get('cin'));
        $user->setAddress($request->request->get('address'));

        $entityManager->persist($user);
        $entityManager->flush();

        return $this->json('User created successfully');
    }

    #[Route('/{id}', name: 'user_show', methods: ['GET'])]
    public function show(ManagerRegistry $doctrine, int $id): Response
    {
        $user = $doctrine->getRepository(User::class)->find($id);

        if(!$user) {
            return $this->json('No user found !');
        }

        $data = [
            'id' => $user->getId(),
            'name' => $user->getName(),
            'firstname' => $user->getFirstname(),
            'age' => $user->getAge(),
            'cin' => $user->getCin(),
            'address' => $user->getAddress(),
        ];

        return $this->json($data);
    }

    #[Route('/{id}', name: 'user_edit', methods: ['PUT', 'PATCH'])]
    public function edit(ManagerRegistry $doctrine, Request $request, int $id): Response
    {
        $entityManager = $doctrine->getManager();
        $user = $entityManager->getRepository(User::class)->find($id);

        if(!$user) {
            return $this->json('No user found !');
        }

        $content = json_decode($request->getContent());
        $user->setName($content->name);
        $user->setFirstname($content->firstname);
        $user->setAge($content->age);
        $user->setCin($content->cin);
        $user->setAddress($content->address);
        $entityManager->flush();

        $data = [
            'id' => $user->getId(),
            'name' => $user->getName(),
            'firstname' => $user->getFirstname(),
            'age' => $user->getAge(),
            'cin' => $user->getCin(),
            'address' => $user->getAddress(),
        ];

        return $this->json($data);
    }

    #[Route('/{id}', name: 'user_delete', methods: ['DELETE'])]
    public function delete(ManagerRegistry $doctrine, int $id): Response
    {
        $entityManager = $doctrine->getManager();
        $user = $entityManager->getRepository(User::class)->find($id);

        if(!$user) {
            return $this->json('No user found !');
        }

        $entityManager->remove($user);
        $entityManager->flush();

        return $this->json('User deleted !');
    }
}