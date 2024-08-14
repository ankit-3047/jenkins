pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the Git repository
                git url: 'https://github.com/ankit-3047/jenkins', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh "docker build -t my-docker-image -f ./Dockerfile ."
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run the Docker container
                    sh "docker run --name my-container -d my-docker-image"
                    
                    // Optional: Run some commands in the Docker container, e.g., tests
                    // sh "docker exec my-container ./run-tests.sh"
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                // Archive build artifacts if needed
                archiveArtifacts artifacts: '**/target/*.jar', allowEmptyArchive: true
            }
        }

        stage('Clean Up') {
            steps {
                script {
                    // Stop and remove Docker container
                    sh "docker stop my-container || true"
                    sh "docker rm my-container || true"
                }
            }
        }
    }

    post {
        success {
            echo 'Build and Docker operations completed successfully!'
        }
        failure {
            echo 'Build or Docker operations failed.'
        }
        always {
            echo 'Cleaning up...'
            cleanWs() // Clean workspace after build
        }
    }
}
